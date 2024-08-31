import DatePicker, { getFormatedDate } from "react-native-modern-datepicker";
import EditProfileStyling from "@/Styles_Theme/EditProfileStyle";

import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
  TextInput,
  Modal,
} from "react-native";

const [country, setCountry] = useState("Ghana");
const [openStartDatePicker, setOpenStartDatePicker] = useState(false);
const today = new Date();
const startDate = getFormatedDate(
  today.setDate(today.getDate() + 1),
  "YYYY/MM/DD"
);
const [selectedStartDate, setSelectedStartDate] = useState("01/01/1990");
const [startedDate, setStartedDate] = useState("01/01/1990");

const handleChangeStartDate = (propDate) => {
  setStartedDate(propDate);
};

const handleOnPressStartDate = () => {
  setOpenStartDatePicker(!openStartDatePicker);
};

export const renderDatePicker = () => (
  <Modal animationType="slide" transparent={true} visible={openStartDatePicker}>
    <View style={EditProfileStyling.modalContainer}>
      <View style={EditProfileStyling.datePickerContainer}>
        <DatePicker
          options={EditProfileStyling.datePickerOptions}
          mode="calendar"
          minimumDate={startDate}
          style={EditProfileStyling.datePicker}
          onDateChanged={handleChangeStartDate}
          onSelectedChange={(date) => setSelectedStartDate(date)}
        />
        <TouchableOpacity onPress={handleOnPressStartDate}>
          <Text style={EditProfileStyling.closeButtonText}>Close</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
);
