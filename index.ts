let docArray: Array<any> = [];
let validType = ["text", "video", "img"];

export const deleteDoc = (): Array<any> => {
    docArray = [];
    return docArray;
};

export const uploadDoc = (newDoc: any): any => {
    if (
        isNaN(newDoc.id) ||
        (typeof newDoc.name === 'string' && newDoc.name.trim().length === 0) ||
        (typeof newDoc.content === 'string' && newDoc.name.trim().length === 0) ||
        validType.find(element => element === newDoc.type) === undefined
    ) {
        throw new TypeError();
    }
    docArray.push(newDoc);

    return newDoc;
}

export const seeListDoc = (docArray): Array<any> => {
    return docArray;
}

export const filterDocByName = (docName: string): Array<any> => {
    console.log(docArray);    

    let res: Array<any> = [];

    docArray.forEach(element => {
        if (element.name === docName) {
            res.push(element)
        }
    });

    return res;
}

// export const

