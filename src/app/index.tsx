import { useState } from "react";
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

// Student data
const students = [
  {
    id: "s1",
    name: "Ana Cruz",
    course: "IT313",
    units: 21,
    isFullLoad: true,
  },
  {
    id: "s2",
    name: "Bea Santos",
    course: "IT313",
    units: 15,
    isFullLoad: false,
  },
  {
    id: "s3",
    name: "Cid Ramos",
    course: "IT313",
    units: 18,
    isFullLoad: true,
  },
  {
    id: "s4",
    name: "Dex Alonzo",
    course: "IT313",
    units: 12,
    isFullLoad: false,
  },
];

// StudentCard component
function StudentCard({
  name,
  course,
  units,
  isFullLoad,
}: {
  name: string;
  course: string;
  units: number;
  isFullLoad: boolean;
}) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>

      <Text style={styles.info}>
        Course: {course}
      </Text>

      <Text style={styles.info}>
        Units: {units}
      </Text>

      {isFullLoad && (
        <Text style={styles.fullLoad}>
          Full Load
        </Text>
      )}
    </View>
  );
}

// StudentRoster component
function StudentRoster() {
  const [reverse, setReverse] = useState(false);

  const displayedStudents = reverse
    ? [...students].reverse()
    : students;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Student Roster
      </Text>

      <Text style={styles.count}>
        {`${students.length} students`}
      </Text>

      <View style={styles.buttonContainer}>
        <Button
          title={
            reverse
              ? "Show Original Order"
              : "Reverse Roster"
          }
          onPress={() => setReverse(!reverse)}
        />
      </View>

      <ScrollView>
        {displayedStudents.map((student) => (
          <StudentCard
            key={student.id}
            name={student.name}
            course={student.course}
            units={student.units}
            isFullLoad={student.isFullLoad}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

// App entry
export default function Index() {
  return <StudentRoster />;
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f6f8",
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 5,
  },

  count: {
    fontSize: 18,
    marginBottom: 15,
  },

  buttonContainer: {
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#ffffff",
    padding: 18,
    marginBottom: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#dddddd",
  },

  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 6,
  },

  info: {
    fontSize: 16,
    marginBottom: 3,
  },

  fullLoad: {
    marginTop: 8,
    fontSize: 15,
    fontWeight: "bold",
  },
});