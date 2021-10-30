import PDFViewer from './pdfviewer';
import PDF from '../assets/FrioWatch_PrivacyPolicy.pdf';




function PrivacyPolicyFrioWatch(){

    return(
        
            <PDFViewer pdfFile={PDF}/>
        
    );
}
export default PrivacyPolicyFrioWatch;