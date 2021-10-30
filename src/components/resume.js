import PDFViewer from './pdfviewer';
import PDF from '../assets/Brandon_Rush_Resume_2021.pdf';


function Resume(){

    return(
        <PDFViewer pdfFile={PDF}/>
    );
}
export default Resume;