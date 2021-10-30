import PDFViewer from './pdfviewer';
import PDF from '../assets/AggieMoms_PrivacyPolicy.pdf';




function PrivacyPolicyAggieMoms(){

    return(
        
            <PDFViewer pdfFile={PDF}/>
        
    );
}
export default PrivacyPolicyAggieMoms;