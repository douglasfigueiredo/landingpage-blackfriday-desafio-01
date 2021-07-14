import React from "react";
import * as S from "./styled";

import LogoBlackFriday from "../../assets/blackfriday_logo.png";

export default function Header() {
  return (
    <S.ContentHeader>
      <S.ImageLogo src={LogoBlackFriday} width="100%" />
    </S.ContentHeader>
  );
}
