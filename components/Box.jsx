import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  FlatList,
  Pressable,
} from "react-native";
import Icons from "../components/Icons";
export default Box = (props) => {
  const [isCross, setIsCross] = useState(false);
  const [gameWinner, setGameWinner] = useState("");
  const [gameState, setGameState] = useState(new Array(9).fill("empty", 0, 9));

  const reloadGame = () => {
    setGameState(new Array(9).fill("empty", 0, 9));
    setGameWinner("");
    setIsCross(false);
  };

  const checkIsWinner = () => {
    if (
      gameState[0] === gameState[1] &&
      gameState[0] === gameState[2] &&
      gameState[0] !== "empty"
    ) {
      setGameWinner(`${gameState[0]} won the Game ✌️`);
    } else if (
      gameState[3] === gameState[4] &&
      gameState[3] === gameState[5] &&
      gameState[3] !== "empty"
    ) {
      setGameWinner(`${gameState[3]} won the Game ✌️`);
    } else if (
      gameState[6] === gameState[7] &&
      gameState[6] === gameState[8] &&
      gameState[6] !== "empty"
    ) {
      setGameWinner(`${gameState[6]} won the Game ✌️`);
    } else if (
      gameState[0] === gameState[3] &&
      gameState[3] === gameState[6] &&
      gameState[0] !== "empty"
    ) {
      setGameWinner(`${gameState[0]} won the Game ✌️`);
    } else if (
      gameState[1] === gameState[4] &&
      gameState[4] === gameState[7] &&
      gameState[1] !== "empty"
    ) {
      setGameWinner(`${gameState[1]} won the Game ✌️`);
    } else if (
      gameState[2] === gameState[5] &&
      gameState[5] === gameState[8] &&
      gameState[2] !== "empty"
    ) {
      setGameWinner(`${gameState[2]} won the Game ✌️`);
    } else if (
      gameState[0] === gameState[4] &&
      gameState[4] === gameState[8] &&
      gameState[0] !== "empty"
    ) {
      setGameWinner(`${gameState[0]} won the Game ✌️`);
    } else if (
      gameState[2] === gameState[4] &&
      gameState[4] === gameState[6] &&
      gameState[2] !== "empty"
    ) {
      setGameWinner(`${gameState[2]} won the Game ✌️`);
    } else if (!gameState.includes("empty", 0)) {
      setGameWinner("Draw game... ⌛️");
    }
  };

  const onChangeItem = (itemNumber) => {
    if (gameWinner) {
     return alert(`${gameWinner}`);
      
    }if (gameState[itemNumber] === "empty") {
      gameState[itemNumber] = isCross ? "cross" : "circle";
      setIsCross(!isCross);
    } else {
      return alert("Block already filled");
    }

    checkIsWinner();
  };

  return (
    <SafeAreaView>
    
        {gameWinner ? (
          <View style={[styles.winnerInfo, styles.playerInfo]}>
            <Text style={styles.winnerTxt}>{gameWinner}</Text>
          </View>
        ) : (
          <View
            style={[
              styles.playerInfo,
              isCross ? styles.playerX : styles.playerO,
            ]}
          >
            <Text style={styles.gameTurnTxt}>
              Player {isCross ? "X" : "O"}'s Turn
            </Text>
          </View>
        )}
        <FlatList
          numColumns={3}
          data={gameState}
          style={styles.grid}
          renderItem={({ item, index }) => (
            <Pressable style={styles.card} onPress={() => onChangeItem(index)}>
              <Icons name={item} />
            </Pressable>
          )}
        />
        <Pressable style={styles.gameBtn} onPress={reloadGame}>
          <Text style={styles.gameBtnText}>
            {gameWinner ? "Start New Game" : "Reload Game"}
          </Text>
        </Pressable>
     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  playerInfo: {
    height: 56,

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    borderRadius: 4,
    paddingVertical: 8,
    marginVertical: 12,

    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: "#333",
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
  },
  gameTurnTxt: {
    fontSize: 20,
    color: "#FFFFFF",
    fontWeight: "600",
  },
  playerX: {
    backgroundColor: "#38CC77",
  },
  playerO: {
    backgroundColor: "#F7CD2E",
  },
  grid: {
    margin: 12,
  },
  card: {
    height: 100,
    width: "33.33%",

    alignItems: "center",
    justifyContent: "center",

    borderWidth: 1,
    borderColor: "#333",
  },
  winnerInfo: {
    borderRadius: 8,
    backgroundColor: "#38CC77",

    shadowOpacity: 0.1,
  },
  winnerTxt: {
    fontSize: 20,
    color: "#FFFFFF",
    fontWeight: "600",
    textTransform: "capitalize",
    marginHorizontal: 14,
  },
  gameBtn: {
    alignItems: "center",

    padding: 10,
    borderRadius: 8,
    marginHorizontal: 36,
    backgroundColor: "#8D3DAF",
  },
  gameBtnText: {
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight: "500",
  },
});
