import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
const styles = StyleSheet.create({
  page: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "6px",
  },
  card: {
    width: "150px", // Ajusta el ancho de la tarjeta
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // Centra el contenido horizontalmente
    backgroundColor: "#FFFFFF",
    color: "#000000",
  },
  image: {
    width: "100%",
    height: "80px", // Ajusta la altura de la imagen
  },
  title: {
    fontSize: "16px", // Ajusta el tamaño del título
    textAlign: "center", // Centra el título
    marginBottom: "10px",
  },
  content: {
    fontSize: "8px", // Ajusta el tamaño del contenido
    textAlign: "center", // Centra el contenido
    marginBottom: "10px",
  },
});

interface PDFDocumentProps {
  email: string;
  date: string;
  modalEvent: string;
  modalLocation: string;
  time: string;
}

const PDFDocument: React.FC<PDFDocumentProps> = ({
  email,
  date,
  modalEvent,
  modalLocation,
  time,
}) => (
  <Document>
    <Page style={styles.page} size="A7">
      <View style={styles.card}>
        <Image style={styles.image} src="/logo_alternativo.png" />
        <Text style={styles.title}>Dra. Pamela Perez</Text>
        <Text style={styles.content}>Correo: {email}</Text>
        <Text style={styles.content}>Fecha: {date}</Text>
        <Text style={styles.content}>Hora: {time}</Text>
        <Text style={styles.content}>Lugar: {modalEvent}</Text>
        <Text style={styles.content}>Dirección: {modalLocation}</Text>
      </View>
    </Page>
  </Document>
);

export default PDFDocument;
