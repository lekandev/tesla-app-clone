import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMusic, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import items from "./items";

const Menu = () => {
  return (
    <View style={styles.menuItems}>
      {items.map((item) => (
        <TouchableOpacity key={item.id} style={styles.menuRow}>
          <FontAwesomeIcon style={styles.icon} icon={item.icon} size={24} />
          <View style={styles.menuTextBox}>
            <Text style={styles.menuText}>{item.title}</Text>
            {item.subTitle && (
              <Text style={styles.subTitle}>{item.subTitle}</Text>
            )}
          </View>
          <FontAwesomeIcon
            style={styles.arrowIcon}
            icon={faChevronRight}
            size={24}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Menu;
