export const deleteDoc = (docArray: Array<any>): Array<any> => {
    docArray = [];
    return docArray;
};

export const uploadDoc = (docArray: Array<any>, validType: Array<string>, newDoc: any): Array<any> => {    
    if (
        isNaN(newDoc.id) ||
        (typeof newDoc.name === 'string' && newDoc.name.trim().length === 0) ||
        (typeof newDoc.content === 'string' && newDoc.name.trim().length === 0) ||
        validType.find(element => element === newDoc.type) === undefined
    ) {
        throw new TypeError();
    }
    docArray.push(newDoc);

    return docArray;
}

export const seeListDoc = (docArray: Array<any>): Array<any> => {
    return docArray;
}

export const filterDocByName = (docArray: Array<any>, docName: string): Array<any> => {    

    let res: Array<any> = [];

    docArray.forEach(element => {
        if (element.name === docName) {
            res.push(element)
        }
    });

    return res;
}

