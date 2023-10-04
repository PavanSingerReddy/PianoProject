import React from 'react'
import '../components/PianoMappingEntries.css'
import { KEY_TO_NOTE } from '../Constants/PianoConstants';
const PianoMappingEntries = () => {
    return (
        <table className="piano-mapping">
          <thead>
            <tr>
              <th>Key</th>
              <th>Note</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(KEY_TO_NOTE).map(([key, note]) => (
              <tr key={key}>
                <td>{key}</td>
                <td>{note.toUpperCase()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
}

export default PianoMappingEntries