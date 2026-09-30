import DatasetSection from '../components/DatasetSection.jsx';

const classNames = [
  'Lung Adenocarcinoma',
  'Lung Squamous Cell Carcinoma',
  'Colon Adenocarcinoma',
  'Colon Normal',
  'Colon Benign',
];

function Dataset() {
  return (
    <div>
      <DatasetSection classNames={classNames} />
    </div>
  );
}

export default Dataset;
