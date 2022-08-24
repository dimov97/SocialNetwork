let store:storeType = {
    _state: {
    profilePage: {
        messageForNewPost: '',
        postData: [
            {id: 1, message: 'hi, how are you ?', likesCount: 32},
            {id: 2, message: 'this is my first post', likesCount: 12}
        ]
    },
    dialogsPage: {
        dialogsData: [
            {id: 1, name: "Dimych"},
            {id: 2, name: "Alena"},
            {id: 3, name: "Sveta"},
            {id: 4, name: "Kolya"},
            {id: 5, name: "Ihor"},
            {id: 6, name: "Pavel"},
            {id: 7, name: "Valera"},
        ],
        messagesData: [
            {id: 1, message: 'hi'},
            {id: 2, message: 'how is your IT ?'},
            {id: 3, message: 'yo'}
        ]
    }
},
    _rerenderEntireTree () {
        console.log('state is changed')
    },
    addPost (postMessage:string) {
        const newPost:PostDataType = {id:5, message:postMessage, likesCount: 0}
        this._state.profilePage.postData.push(newPost)
            this._rerenderEntireTree()
    },
    changeNewText (newText:string) {
        this._state.profilePage.messageForNewPost = newText
            this._rerenderEntireTree()
    },
    subscribe (observer) {
        this._rerenderEntireTree = observer
    },
    getState() {
        return this._state
    }
}
export type storeType = {
    getState:()=>RootStateType
    _rerenderEntireTree:()=>void
    _state: RootStateType
    changeNewText:(newText:string)=>void
    addPost:(postMessage:string)=>void
    subscribe:(observer:()=>void)=>void

}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}
export type PostDataType = {
    id: number,
    message: string,
    likesCount: number
}
export type DialogsDataType = {
    id: number,
    name: string
}
export type MessagesDataType = {
    id: number,
    message: string
}
export type ProfilePageType = {
    postData: Array<PostDataType>
    messageForNewPost:string
}
export type DialogsPageType = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
}


export default store;