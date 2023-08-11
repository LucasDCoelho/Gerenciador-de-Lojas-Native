import { Picker } from "@react-native-picker/picker";
import { useState } from "react";

export const Dropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("");

  return (
    <Picker
      selectedValue={selectedLanguage}
      onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
      mode="dropdown"
      style={{
        backgroundColor:'#fff',
        margin:10
      }}
      >
      <Picker.Item label="Java" value="java" color="#000"/>
      <Picker.Item label="JavaScript" value="js" />
    </Picker>
  );
};
