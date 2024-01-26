import React, { useEffect, useState } from 'react'
import { Editor, EditorState, RichUtils, ContentState, convertToRaw, convertFromRaw } from 'draft-js'
// import 'draft-js/dist/Draft.css'

export default function EditorWindow() {

    const [editorState, setEditorState] = useState(() => {
        EditorState.createEmpty();
    })

    useEffect(() => {
        const savedContent = localStorage.getItem('editorContent');
        if(savedContent) {
            const rawContent = JSON.parse(savedContent);
            const contentState = convertFromRaw(rawContent);
            setEditorState(EditorState.createWithContent(contentState));
        }
    }, [])

    const handlePreviousInput = (input, editorState) => {
        if(input === '#' && editorState.getSelection().getStartOffset() === 0) {
            setEditorState(RichUtils.toggleBlockType(editorState, 'header-one'));
            return 'handled'
        }
        else if (input === '*' && editorState.getSelection().getStartOffset() === 0) {
            const contentkaState = editorState.getCurrentContent();
            const selectionkaState = editorState.getCurrentContent();
            const blockWithEntityStart = contentkaState.getBlockWithEntityAt(selectionkaState.getStartKey());
            const entity = blockWithEntityStart.getEntityAt(0);

            if(entity && contentkaState.getEntity(entity).getType() === 'BOLD') {
                setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'))
                return 'handled';
            }

            else {
                const contentStateWithEntity = contentState.createEntity('BOLD', 'IMMUTABLE', {});
                const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
                const newEditorState = EditorState.push(editorState, contentStateWithEntity, 'create-entity');
                setEditorState(RichUtils.toggleInlineStyle(newEditorState, 'BOLD', entityKey));
                return 'handled';
              }
        }

        else if(input === '*' && editorState.getSelection().getStartOffset() === 1) {

        }
    }
    

  return (
    <div className='m-4 mr-4! p-2 border-2 border-blue-500 w-full h-[34rem]'>
      <div
        editorState={editorState}
        onEditorStateChange={setEditorState} >
        
      </div>
    </div>
  )
}
