import EditTopicForm from '@/app/components/EditTopicForm'
import React from 'react'

const getTopicById= async(id) => {
  const apiUrl=process.env.API_URL

  try {
    const res = await fetch(`${apiUrl}/api/topics/${id}`, {
      cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch topic");
  }

  return res.json();
  }catch(error){
    console.log(error);
  }
}

async function EditTopic({params}) {
  const {id} = params
  console.log("id:", id)
  const { topic } = await getTopicById(id);
  const { title, description } = topic;


  return (
    <div>
      <EditTopicForm id={id} title={title} description={description} />
      
      
      </div>
  )
}

export default EditTopic