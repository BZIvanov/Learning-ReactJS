import { useState } from "react";
import { useIntl, FormattedMessage } from "react-intl";

const Form = () => {
  const { formatMessage } = useIntl();

  const [name, setName] = useState<string>("");
  const [dogs, setDogs] = useState<string>("");

  return (
    <div>
      {!!name && (
        <p>
          <FormattedMessage
            id="welcomeText"
            values={{ name, bold: (chunks) => <b>{chunks}</b> }}
          />
        </p>
      )}

      <p>
        <FormattedMessage
          id="petsInfo"
          values={{ num: Number(dogs), bold: (chunks) => <b>{chunks}</b> }}
        />
      </p>

      <form className="App-form">
        <div>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="text"
            placeholder={formatMessage({ id: "yourName" })}
            name="name"
          />
        </div>

        <div style={{ margin: "20px 0" }}>
          <select defaultValue="us">
            <option value="us">
              <FormattedMessage id="us" />
            </option>
            <option value="bg">
              <FormattedMessage id="bg" />
            </option>
            <option value="other">
              <FormattedMessage id="other" />
            </option>
          </select>
        </div>

        <div>
          <input
            value={dogs}
            onChange={(event) => setDogs(event.target.value)}
            type="number"
            placeholder={formatMessage({ id: "petsCount" })}
            name="dogs"
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
