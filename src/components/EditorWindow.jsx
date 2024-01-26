import React, { useState } from 'react'
import { EditorState } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'

export default function EditorWindow() {

    const [EditorState, setEditorState] = useState(() => {
        EditorState.createEmpty();
    })

  return (
    <div className='m-4 mr-4! p-2 border-2 border-blue-500 w-full h-[34rem]'>
      <div
        EditorState={EditorState}
        onEditorStateChange={setEditorState} >
        
      </div>
    </div>
  )
}
