import React from "react";
import { Container, Logo, Title, SubTitle, Rules } from "./styles";
import ButtonComponent from "../../components/Buttons";
import { Alert } from "react-native";

export default function Start() {
  function handleNavToPlayAlone() {
    Alert.alert("Botão 1 clicado");
  }

  function handleNavToPlayTogether() {
    Alert.alert("Botão 2 clicado");
  }

  function handleNavToRules() {
    Alert.alert("Rules clicado");
  }

  return (
    <Container>
      <Logo
        source={require("../../assets/logoDark.png")}
        style={{ resizeMode: "contain" }}
      />
      <Title>Bem-vindo ao {"\n"} Bomb game</Title>
      <SubTitle>Escolha um modo de jogo.</SubTitle>
      <ButtonComponent
        buttonText={"Jogar Solo"}
        handlePress={handleNavToPlayAlone}
      />
      <ButtonComponent
        buttonText={"Jogar Em Dupla"}
        handlePress={handleNavToPlayTogether}
      />
      <Rules onPress={handleNavToRules}>Ver as regras do jogo</Rules>
    </Container>
  );
}