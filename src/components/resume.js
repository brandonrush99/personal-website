import { Worker,Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { getFilePlugin, RenderDownloadProps } from '@react-pdf-viewer/get-file';
import PDF from '../assets/Brandon_Rush_Resume_2021.pdf';
import { zoomPlugin } from '@react-pdf-viewer/zoom';
import '@react-pdf-viewer/zoom/lib/styles/index.css';
import '../styles/resume.css';



function Resume(){
    const getFilePluginInstance = getFilePlugin();
    const { Download } = getFilePluginInstance;
    const zoomPluginInstance = zoomPlugin();
    const { ZoomInButton, ZoomOutButton, ZoomPopover } = zoomPluginInstance;

    return(
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
            <div className='resumeContainer'>
                <Download>
                    {
                        (props) => (
                            <button
                                className='download'
                                onClick={props.onClick}
                            >
                                Download
                            </button>
                        )
                    }
                </Download>
                <div className='zoom'>
                    <ZoomOutButton />
                </div>
                <div className='zoom'>
                    <ZoomPopover />
                </div>
                <div className='zoom'>
                    <ZoomInButton />
                </div>
            </div>
            <div className="viewer">
                <Viewer 
                    fileUrl={PDF}
                    plugins={[
                        getFilePluginInstance,
                        zoomPluginInstance,
                    ]}
                />    
            </div>
            
        </Worker>
    );
}
export default Resume;