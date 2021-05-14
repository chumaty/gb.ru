export const AddChat = ({ chatsList, setChatsList }) => {
    const nexId = `chat${Object.keys(chatsList).length + 1}`;

    const getColor = () => {
        const colors = ["indigo", "orange", "fuchsia"];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    const getName = () => {
        const firstname = ["Edward", "Harrison", "Jasica", "Emma", "Ben"];
        const lastname = ["Norton", "Smith", "Watson", "Alba", "Diesel"];
        
        const flname = firstname[Math.floor(Math.random() * firstname.length)] + ' ' + lastname[Math.floor(Math.random() * lastname.length)];
        const avatar = flname.substring(0,1);

        return [flname, avatar]
    }

    const avaName = getName();

    setChatsList({
        ...chatsList,
        [nexId]: {
            avatar: avaName[1],
            classname: getColor(),
            name: avaName[0]
        }
    });
}