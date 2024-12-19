import { useParams } from 'react-router-dom'
import { useEffect, useState, useCallback } from 'react'
import { Card } from 'react-bootstrap'
import { FaRegStar } from 'react-icons/fa'

function UserResult() {
  const { id } = useParams()
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [posts, setPosts] = useState([])
  const [comments, setComments] = useState({})
  const [newComment, setNewComment] = useState({})
  const [rating, setRating] = useState({})

  const API_KEY =
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzYxNGIwOTc0YTg2ODAwMTVkYjU1MjciLCJpYXQiOjE3MzQ0Mjk0NDksImV4cCI6MTczNTYzOTA0OX0.mE5mKRYlk-WIPHgNEPOuGdut9pE2Lh53UeLEQHrDUTI'

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/profile/${id}`,
          {
            headers: { Authorization: API_KEY },
          }
        )

        if (!response.ok) {
          throw new Error('Errore nel recupero dei dati utente')
        }

        const data = await response.json()
        setUserData(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchUser()
  }, [id])

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          'https://striveschool-api.herokuapp.com/api/posts/',
          {
            headers: { Authorization: API_KEY },
          }
        )
        if (response.ok) {
          const data = await response.json()
          setPosts(data.reverse())
        } else {
          console.error('Errore nel recupero dei post')
        }
      } catch (err) {
        console.error('Errore nel recupero dei post:', err.message)
      }
    }

    fetchPosts()
  }, [])

  const fetchComments = useCallback(async () => {
    try {
      const response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/',
        {
          headers: { Authorization: API_KEY },
        }
      )
      if (response.ok) {
        const data = await response.json()
        const commentsByPostId = data.reduce((acc, comment) => {
          ;(acc[comment.elementId] = acc[comment.elementId] || []).push(comment)
          return acc
        }, {})
        setComments(commentsByPostId)
      }
    } catch (err) {
      console.error('Errore nel recupero dei commenti:', err.message)
    }
  }, [API_KEY])

  useEffect(() => {
    fetchComments()
  }, [fetchComments])

  const handleCommentChange = (postId, e) => {
    setNewComment({
      ...newComment,
      [postId]: { ...newComment[postId], text: e.target.value },
    })
  }

  const handleRatingChange = (postId, rate) => {
    setRating({
      ...rating,
      [postId]: rate,
    })
  }

  const handleCommentSubmit = async (postId) => {
    const commentData = {
      comment: newComment[postId]?.text || '',
      rate: rating[postId] || 0,
      elementId: postId,
    }

    try {
      const response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: API_KEY,
          },
          body: JSON.stringify(commentData),
        }
      )

      if (response.ok) {
        fetchComments()
        setNewComment({ ...newComment, [postId]: { text: '' } })
        setRating({ ...rating, [postId]: 0 })
      } else {
        alert("Errore nell'invio del commento")
      }
    } catch (err) {
      console.error('Errore nel commentare:', err.message)
    }
  }

  if (loading) {
    return <div>Caricamento in corso...</div>
  }

  if (error) {
    return <div>Errore: {error}</div>
  }

  return (
    <div>
      <Card>
        <Card.Img
          variant="top"
          style={{
            height: '200px',
            objectFit: 'cover',
            marginBottom: '2rem',
          }}
          src={userData.image}
        />
        <div className="w-25 profile-picture">
          <img
            className="rounded-circle border border-5 border-withe ms-3"
            src={userData.image}
            width="150px"
            height="150px"
          />
        </div>
        <Card.Body className="px-4 pb-2 pt-5">
          <Card.Title className="d-flex align-items-center">
            {userData.name} {userData.surname}
          </Card.Title>
          <Card.Text>
            {userData.title} | {userData.bio}
          </Card.Text>
          <Card.Text>{userData.area}</Card.Text>
        </Card.Body>
      </Card>

      <div className="mt-4">
        {posts
          .filter((post) => post.user._id === id)
          .map((post) => (
            <div
              key={post._id}
              style={{
                backgroundColor: 'white',
                padding: '10px',
                borderRadius: '10px',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                marginBottom: '15px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '10px',
                }}
              >
                <div>
                  <div className="d-flex align-items-center">
                    <img
                      src={post.user.image}
                      alt="profile"
                      style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        marginRight: '10px',
                      }}
                    />
                    <h4 style={{ margin: 0 }}>
                      {post.username || 'Utente sconosciuto'}
                    </h4>
                  </div>

                  <p style={{ margin: 0, color: 'gray', fontSize: '12px' }}>
                    {post.createdAt
                      ? new Date(post.createdAt).toLocaleDateString()
                      : 'Data non disponibile'}
                  </p>
                </div>
              </div>

              <h4
                style={{
                  margin: 0,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  maxHeight: '4.5em',
                  lineHeight: '1.5em',
                }}
              >
                {post.text || 'Contenuto non disponibile'}
              </h4>

              {post.image && (
                <img
                  src={post.image}
                  alt="post"
                  style={{
                    width: '100%',
                    marginTop: '10px',
                    borderRadius: '10px',
                  }}
                />
              )}

              <div>
                <h5>Commenti:</h5>
              </div>

              {comments[post._id] && comments[post._id].length > 0 ? (
                <div style={{ marginTop: '15px' }}>
                  {comments[post._id].map((comment) => (
                    <div
                      key={comment._id}
                      style={{
                        padding: '5px 0',
                        borderBottom: '1px solid #ccc',
                      }}
                    >
                      <div className="d-flex flex-column">
                        <div className="d-flex">
                          <strong>{comment.author}</strong>:{' '}
                          <p className="ms-1">{comment.comment}</p>
                        </div>
                        <div className="d-flex">
                          <p>{comment.rate}</p>
                          <FaRegStar className="text-warning" />
                        </div>
                        <small>
                          {new Date(comment.createdAt)
                            .toLocaleString('it-IT', {
                              timeZone: 'Europe/Rome',
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit',
                              second: '2-digit',
                            })
                            .slice(0, -3)}
                        </small>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p style={{ color: 'gray', fontStyle: 'italic' }}>
                  Nessun commento disponibile
                </p>
              )}

              <div style={{ marginTop: '15px' }}>
                <input
                  type="text"
                  placeholder="Scrivi il tuo commento"
                  value={newComment[post._id]?.text || ''}
                  onChange={(e) => handleCommentChange(post._id, e)}
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '10px',
                    border: '1px solid #ccc',
                    marginBottom: '10px',
                    minHeight: '50px',
                  }}
                />
                <div className="d-flex">
                  <input
                    type="number"
                    placeholder="Rating"
                    value={rating[post._id] || ''}
                    onChange={(e) =>
                      handleRatingChange(post._id, e.target.value)
                    }
                    style={{
                      width: '60px',
                      padding: '5px',
                      borderRadius: '5px',
                      marginRight: '10px',
                      border: '1px solid #ccc',
                    }}
                  />
                  <button
                    onClick={() => handleCommentSubmit(post._id)}
                    style={{
                      backgroundColor: '#0073b1',
                      color: 'white',
                      padding: '10px 15px',
                      borderRadius: '5px',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    Pubblica
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default UserResult
