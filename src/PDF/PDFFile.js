import React from "react";
import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";
import LebronStretch from "../photos/lebron_transparent.png";


const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
    },
    title: {
        fontSize: 24,
        textAlign: "center",
        fontFamily: "AntonFamily",
    },
    text: {
        margin: 12,
        fontSize: 14,
        textAlign: "justify",
        fontFamily: "AntonFamily",

    },
    image: {
        marginVertical: 15,
        marginHorizontal: 100,
    },
    header: {
        fontSize: 12,
        marginBottom: 20,
        textAlign: "center",
        color: "grey",
        fontFamily: "AntonFamily",
    },
    pageNumber: {
        position: "absolute",
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: "center",
        color: "grey",
        fontFamily: "AntonFamily",
    },
});

const PDFFile = () => {

    return (
        <Document>
            <Page style={styles.body}>
                <Text style={styles.header} fixed></Text>
                <Image style={styles.image} src={LebronStretch} />
                <Text style={styles.text}>
                    aragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph.
                </Text>
                <Text
                    style={styles.pageNumber}
                    render={({ pageNumber, totalPages }) =>
                        `${pageNumber} / ${totalPages}`
                    }
                    fixed
                />
            </Page>
        </Document>
    )

};

export default PDFFile;