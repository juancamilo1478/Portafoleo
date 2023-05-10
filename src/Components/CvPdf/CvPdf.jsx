import pdfFile from '../../assets/pdf.pdf'
const CvPdf= () => {
    return <>
        <object data={pdfFile} type="application/pdf" width="100%" height="800px">
            <p>Tu navegador no soporta la visualización de archivos PDF. Haz clic <a href={pdfFile}>aquí</a> para descargar el archivo.</p>
        </object>
    </>
}
export default CvPdf