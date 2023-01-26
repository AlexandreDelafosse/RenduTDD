import { jest } from "@jest/globals";
import { deleteDoc, uploadDoc, seeListDoc, filterDocByName } from "./index";

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
    it("Should remove every documents", () => {
        expect(deleteDoc()).toEqual([]);
    });
});

describe("upload file", () => {

    it("should upload a file", () => {
        expect(uploadDoc(doc1)).toEqual(
            {
                id: 1,
                name: "monNom1",
                content: "jfcvguhbyijuopkl^^",
                type: "img"
            }
        )
    });
    it("should throw an error if the document is not valid", () => {
        expect(() => uploadDoc(docBadId)).toThrow(TypeError);
        expect(() => uploadDoc(docBadName)).toThrow(TypeError);
        expect(() => uploadDoc(docBadName2)).toThrow(TypeError);
        expect(() => uploadDoc(docBadType)).toThrow(TypeError);
    });

})

describe("Filter documents", () => {
    uploadDoc(doc1);
    uploadDoc(doc2);
    uploadDoc(doc3);
    uploadDoc(doc33);
    uploadDoc(doc4);


    xit("Should  return [] if there's no document named monPrenom", () => {
        expect(filterDocByName('monPrenom')).toEqual([]);
    });
    it("Should return one document named monNom1", () => {
        expect(filterDocByName('monNom1')).toEqual([{
            name: "monNom1",
            id: 1,
            content: "jfcvguhbyijuopkl^^",
            type: "img"
        }]);
    });

    xit("Should return one document named monNom2", () => {
        expect(filterDocByName('monNom2')).toEqual([{
            name: "monNom2",
            id: 2,
            content: "jfcvguhbyijuopkl^^",
            type: "img"
        }]);
    });
    xit("Should return 2 documents named monNom3", () => {
        expect(filterDocByName('monNom3').length).toEqual(2);
    });
});


// describe("Show all documents", () => {
//     xit("Should return all documents", () => {
//         // expect(seeListDoc(docArray).length).toEqual(5);
//     });
// });

// describe("Delete a document", () => {
//     it("find the document named 'monNom4' by giving the id 4", () => {

//     });
// });













