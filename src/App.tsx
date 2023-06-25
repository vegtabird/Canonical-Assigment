import { useEffect, useRef } from 'react';
import { BlogPostCard, IContent } from './components'
import { useGetData } from './request/data';
function App() {
  const { data, sendRequest, isLoading } = useGetData()
  const requestRef = useRef(sendRequest)
  useEffect(() => {
    requestRef.current()
  }, [])
  return (
    <div style={{ marginTop: '25px' }}>
      {
        isLoading ? <div>Loading....</div> : <div className='row'>
          {
            data?.map((content, index) => {
              return <BlogPostCard className='col-4' content={content as IContent} key={index} />
            })
          }
        </div>
      }
    </div>
  )
}

export default App;
