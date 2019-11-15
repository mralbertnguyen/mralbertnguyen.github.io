import React from 'react'
import {Document, Page } from 'react-pdf';

const filePath = "../../assets/pdf/CV.pdf"

class CVView extends React.Component{
        state = {
        numPages: null,
        pageNumber: 1,
      }
     
      onDocumentLoadSuccess = (numPages:any) => {
        this.setState({ numPages });
      }
     
      render() {
        const { pageNumber, numPages } = this.state;
     
        return (
          <div>
            <Document
              file={filePath}
              onLoadSuccess={this.onDocumentLoadSuccess}
            >
              <Page pageNumber={pageNumber} />
            </Document>
            <p>Page {pageNumber} of {numPages}</p>
          </div>
        );
      }
      
}

export default CVView;