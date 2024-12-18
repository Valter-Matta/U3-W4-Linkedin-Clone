import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function HomeCenterComponent() {
  const [posts, setPosts] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [newPost, setNewPost] = useState({
    text: '',
    image: '',
  })
  const profileState = useSelector((reduxState) => reduxState.profile.users)

  const state = useSelector((state) => state)
  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = () => {
    fetch('https://striveschool-api.herokuapp.com/api/posts/', {
      headers: {
        Authorization: `Bearer ${state.profileKey.key}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.reverse())
      })
      .catch((error) => console.error('Errore nel recuperare i post:', error))
  }

  const handlePostSubmit = () => {
    const newPostData = {
      text: newPost.text,
      image: newPost.image,
    }

    fetch('https://striveschool-api.herokuapp.com/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${state.profileKey.key}`,
      },
      body: JSON.stringify(newPostData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Post creato:', data)
        fetchPosts()
        setShowModal(false)
        setNewPost({ text: '', image: '' })
      })
      .catch((error) => {
        console.error('Errore nel creare il post:', error)
        alert('Si è verificato un errore. Riprova!')
      })
  }

  return (
    <div style={{ padding: '10px', borderRadius: '10px' }} className="mt-5">
      <div
        style={{
          backgroundColor: 'white',
          padding: '15px',
          borderRadius: '10px',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
          marginBottom: '15px',
        }}
      >
        <div className="d-flex">
          <Link to="/">
            <img
              src={profileState.image}
              alt="profile"
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                marginRight: '10px',
              }}
            />
          </Link>

          <input
            type="text"
            placeholder="Crea un post"
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '20px',
              border: '1px solid #ccc',
              marginBottom: '10px',
            }}
            onClick={() => setShowModal(true)}
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <span style={{ cursor: 'pointer', color: '#0073b1' }}>
            📷 Contenuti multimediali
          </span>
          <span style={{ cursor: 'pointer', color: '#0073b1' }}>📅 Evento</span>
          <span style={{ cursor: 'pointer', color: '#0073b1' }}>
            ✍️ Scrivi un articolo
          </span>
        </div>
      </div>

      {posts.length > 0 ? (
        posts.map((post) => (
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
                <h4 style={{ margin: 0 }}>
                  {post.username || 'Utente sconosciuto'}
                </h4>
                <p style={{ margin: 0, color: 'gray', fontSize: '12px' }}>
                  {post.createdAt
                    ? new Date(post.createdAt).toLocaleDateString()
                    : 'Data non disponibile'}
                </p>
              </div>
            </div>
            <p
              style={{
                margin: 0,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                maxHeight: '4.5em',
                lineHeight: '1.5em',
                color: 'gray',
              }}
            >
              {post.text || 'Contenuto non disponibile'}
            </p>
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
          </div>
        ))
      ) : (
        <p style={{ textAlign: 'center', color: 'gray' }}>Caricando...</p>
      )}

      {showModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '10px',
              width: '400px',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
            }}
          >
            <h3>Crea un post</h3>
            <textarea
              placeholder="Scrivi il tuo post"
              value={newPost.text}
              onChange={(e) => setNewPost({ ...newPost, text: e.target.value })}
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '10px',
                border: '1px solid #ccc',
                marginBottom: '10px',
                minHeight: '100px',
              }}
            />
            <input
              type="text"
              placeholder="URL immagine (facoltativo)"
              value={newPost.image}
              onChange={(e) =>
                setNewPost({ ...newPost, image: e.target.value })
              }
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '10px',
                border: '1px solid #ccc',
                marginBottom: '10px',
              }}
            />

            <div style={{ textAlign: 'right' }}>
              <button
                onClick={handlePostSubmit}
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
              <button
                onClick={() => setShowModal(false)}
                style={{
                  marginLeft: '10px',
                  backgroundColor: '#ccc',
                  color: 'black',
                  padding: '10px 15px',
                  borderRadius: '5px',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Annulla
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
