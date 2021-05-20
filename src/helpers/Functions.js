export function getColor (){
    const colors = ["indigo", "orange", "fuchsia"];
    return colors[Math.floor(Math.random() * colors.length)];
};

export function getName (){
    const firstname = ["Edward", "Harrison", "Jasica", "Emma", "Ben"];
    const lastname = ["Norton", "Smith", "Watson", "Alba", "Diesel"];
    
    const flname = firstname[Math.floor(Math.random() * firstname.length)] + ' ' + lastname[Math.floor(Math.random() * lastname.length)];
    const avatar = flname.substring(0,1);

    return [flname, avatar]
};