//constants
export const CHANGE_AUTHOR = 'PROFILE::CHANGE_AUTHOR';

//actions
export const changeAuthor = (author) => {
    type: CHANGE_AUTHOR,
    author
}