import { jest } from "@jest/globals";
import { deleteDoc, uploadDoc, filterDocByName, countDoc } from "./index";

const docBadId = {
    id: "hello",
    name: "",
    content: "jfcvguhbyijuopkl^^",
    type: "img"
}
const docBadName = {
    id: 1,
    name: "",
    content: "jfcvguhbyijuopkl^^",
    type: "img"
}
const docBadName2 = {
    id: 1,
    name: " ",
    content: "jfcvguhbyijuopkl^^",
    type: "img"
}
const docBadType = {
    id: 1,
    name: "tfyvguhijo",
    content: "jfcvguhbyijuopkl^^",
    type: "truc"
}
const doc1 = {
    id: 1,
    name: "monNom1",
    content: "jfcvguhbyijuopkl^^",
    type: "img"
}
const doc2 = {
    id: 2,
    name: "monNom2",
    content: "jfcvguhbyijuopkl^^",
    type: "img"
};
const doc3 = {
    id: 3,
    name: "monNom3",
    content: "jfcvguhbyijuopkl^^",
    type: "video"
};
const doc33 = {
    id: 33,
    name: "monNom3",
    content: "jfcvguhbyijuopkl^^",
    type: "text"
};
const doc4 = {
    id: 4,
    name: "monNom4",
    content: "jfcvguhbyijuopkl^^",
    type: "video"
};

describe("delete all documents", () => {
    const docArray: Array<any> = [doc1, doc1, doc3];
    it("Should return an empty array when given courses", () => {
        expect(deleteDoc(docArray)).toEqual([]);
    });
});

describe("upload file", () => {

    let validTypes = ["text", "video", "img"];
    let docArray: Array<any>;

    beforeEach(() => {
        docArray = [doc2, doc3, doc4];

    });

    it("should retrun the docArray and the last element should be the new document", () => {

        expect(uploadDoc(docArray, validTypes, doc1)[docArray.length - 1]).toEqual(
            doc1
        )
    });

    it("should throw an error if the document is not valid", () => {
        expect(() => uploadDoc(docArray, validTypes, docBadId)).toThrow(TypeError);
        expect(() => uploadDoc(docArray, validTypes, docBadName)).toThrow(TypeError);
        expect(() => uploadDoc(docArray, validTypes, docBadName2)).toThrow(TypeError);
        expect(() => uploadDoc(docArray, validTypes, docBadType)).toThrow(TypeError);
    });

})

describe("Filter documents", () => {
    let docArray: Array<any>;
    let validTypes = ["text", "video", "img"];

    beforeEach(() => {
        docArray = deleteDoc(docArray);
        uploadDoc(docArray, validTypes, doc1);
        uploadDoc(docArray, validTypes, doc2);
        uploadDoc(docArray, validTypes, doc3);
        uploadDoc(docArray, validTypes, doc33);
        uploadDoc(docArray, validTypes, doc4);
    });

    it("Should  return [] if there's no document named monPrenom", () => {
        expect(filterDocByName(docArray, 'monPrenom')).toEqual([]);
    });
    it("Should return one document named monNom1", () => {
        expect(filterDocByName(docArray, 'monNom1')).toEqual([{
            name: "monNom1",
            id: 1,
            content: "jfcvguhbyijuopkl^^",
            type: "img"
        }]);
    });

    it("Should return one document named monNom2", () => {
        expect(filterDocByName(docArray, 'monNom2')).toEqual([{
            name: "monNom2",
            id: 2,
            content: "jfcvguhbyijuopkl^^",
            type: "img"
        }]);
    });
    it("Should return array of 2 documents named monNom3", () => {
        expect(filterDocByName(docArray, 'monNom3')).toEqual([doc3, doc33]);
    });
});

describe("Compting documents", () => {

    it('Should return 5 when given 5 documents', () => {

        let docArray: Array<any> = [];
        let validTypes = ["text", "video", "img"];

        uploadDoc(docArray, validTypes, doc1);
        uploadDoc(docArray, validTypes, doc2);
        uploadDoc(docArray, validTypes, doc3);
        uploadDoc(docArray, validTypes, doc33);
        uploadDoc(docArray, validTypes, doc4);

        expect(countDoc(docArray)).toEqual(5);
    });
});












