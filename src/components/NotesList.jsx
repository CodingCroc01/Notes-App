import Note from "./Note";

const NotesList = (props) => {
  return props.notes.map((note, Index) => (
    <Note
      key={Index}
      id={Index}
      title={note.title}
      content={note.content}
      onDelete={props.deleteNote}
    />
  ));
};

export default NotesList;
