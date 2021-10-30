import { Worker,Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { getFilePlugin } from '@react-pdf-viewer/get-file';
import { zoomPlugin } from '@react-pdf-viewer/zoom';
import '@react-pdf-viewer/zoom/lib/styles/index.css';
import '../styles/pdfviewer.css';



function PDFViewer(props){
    const getFilePluginInstance = getFilePlugin();
    const { Download } = getFilePluginInstance;
    const zoomPluginInstance = zoomPlugin();
    const { ZoomInButton, ZoomOutButton, ZoomPopover } = zoomPluginInstance;

    return(
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
            <div className='pdfContainer'>
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
                    fileUrl={props.pdfFile}
                    plugins={[
                        getFilePluginInstance,
                        zoomPluginInstance,
                    ]}
                />    
            </div>
            
        </Worker>
    );
}
export default PDFViewer;