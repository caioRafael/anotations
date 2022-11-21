import { Center, GridItem } from "@chakra-ui/react"
import {useEditor, EditorContent} from '@tiptap/react'
import StarterKit from "@tiptap/starter-kit"

function MainContent(){
    const editor = useEditor({
        extensions: [
          StarterKit,
        ],
        content: '<p>Hello World!</p>',
      })
    return(
        <GridItem pl='2' pt='20' area={'main'} color={'#fff'}>
            <Center>
                <EditorContent editor={editor}/>
            </Center>
        </GridItem>
    )
}

export default MainContent