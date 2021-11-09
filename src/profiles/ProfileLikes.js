import React, { useState, useEffect, useContext } from "react";
// import { useParams } from "react-router-dom";
import QuotableApi from "../api/api";
import UserContext from "../auth/UserContext";
import LoadingSpinner from "../common/LoadingSpinner";
import './ProfileForm.css';

/** Like Detail page.
 *
 * Renders information about like, along with the quotes at that like.
 *
 * Routed at /likes/:handle
 *
 * Routes -> LikeDetail -> QuoteCardList
 */


function ProfileLikes() {
  const { currentUser } = useContext(UserContext);
  const { username } = currentUser;
  // console.log(username);
  // console.debug("LikedDetail", "currentUser=", currentUser);

  const [likedquote, seeLike] = useState([]);

  useEffect(function getLikedQuoteAndQuotesForUser() {
    async function getLikedQuote(username) {
      // console.log(username);
      let x = await QuotableApi.getLikedQuote(username);
      // console.log(x[0].title);
      seeLike((old) => [...old, ...x]);
    }
    getLikedQuote(username);
  }, [username]);

  if (!likedquote) return <LoadingSpinner />;

  return (
      <div>
        <ul>
          <li className="favorite-list">{JSON.stringify(likedquote[0])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[1])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[2])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[3])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[4])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[5])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[6])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[7])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[8])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[9])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[10])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[11])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[12])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[13])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[14])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[15])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[16])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[17])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[18])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[19])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[20])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[21])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[22])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[23])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[24])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[25])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[26])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[27])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[28])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[29])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[30])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[31])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[32])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[33])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[33])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[34])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[35])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[36])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[37])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[38])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[39])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[40])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[41])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[42])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[43])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[44])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[45])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[46])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[47])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[48])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[49])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[50])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[51])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[52])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[53])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[54])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[55])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[56])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[57])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[58])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[59])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[60])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[61])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[62])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[63])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[64])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[65])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[66])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[67])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[68])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[69])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[70])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[71])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[72])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[73])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[74])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[75])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[76])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[77])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[78])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[79])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[80])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[81])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[82])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[83])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[84])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[85])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[86])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[87])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[88])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[89])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[90])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[91])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[92])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[93])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[94])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[95])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[96])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[97])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[98])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[99])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[100])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[101])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[102])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[103])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[104])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[105])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[106])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[107])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[108])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[109])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[110])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[111])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[112])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[113])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[114])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[115])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[116])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[117])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[118])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[119])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[120])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[121])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[122])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[123])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[124])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[125])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[126])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[127])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[128])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[129])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[130])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[131])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[132])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[133])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[133])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[134])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[135])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[136])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[137])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[138])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[139])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[140])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[141])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[142])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[143])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[144])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[145])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[146])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[147])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[148])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[149])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[150])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[151])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[152])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[153])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[154])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[155])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[156])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[157])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[158])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[159])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[160])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[161])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[162])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[163])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[164])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[165])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[166])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[167])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[168])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[169])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[170])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[171])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[172])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[173])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[174])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[175])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[176])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[177])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[178])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[179])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[180])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[181])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[182])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[183])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[184])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[185])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[186])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[187])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[188])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[189])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[190])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[191])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[192])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[193])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[194])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[195])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[196])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[197])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[198])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[199])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[200])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[201])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[202])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[203])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[204])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[205])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[206])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[207])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[208])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[209])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[210])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[211])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[212])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[213])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[214])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[215])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[216])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[217])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[218])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[219])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[220])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[221])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[222])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[223])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[224])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[225])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[226])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[227])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[228])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[229])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[230])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[231])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[232])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[233])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[233])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[234])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[235])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[236])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[237])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[238])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[239])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[240])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[241])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[242])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[243])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[244])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[245])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[246])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[247])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[248])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[249])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[250])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[251])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[252])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[253])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[254])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[255])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[256])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[257])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[258])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[259])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[260])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[261])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[262])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[263])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[264])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[265])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[266])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[267])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[268])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[269])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[270])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[271])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[272])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[273])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[274])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[275])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[276])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[277])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[278])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[279])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[280])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[281])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[282])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[283])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[284])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[285])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[286])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[287])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[288])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[289])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[290])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[291])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[292])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[293])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[294])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[295])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[296])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[297])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[298])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[299])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[300])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[301])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[302])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[303])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[304])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[305])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[306])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[307])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[308])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[309])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[310])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[311])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[312])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[313])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[314])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[315])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[316])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[317])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[318])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[319])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[320])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[321])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[322])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[323])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[324])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[325])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[326])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[327])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[328])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[329])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[330])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[331])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[332])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[333])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[333])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[334])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[335])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[336])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[337])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[338])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[339])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[340])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[341])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[342])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[343])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[344])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[345])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[346])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[347])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[348])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[349])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[350])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[351])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[352])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[353])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[354])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[355])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[356])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[357])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[358])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[359])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[360])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[361])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[362])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[363])}</li>
          <li className="favorite-list">{JSON.stringify(likedquote[364])}</li>
        </ul>
      </div>
  );
}

export default ProfileLikes;

// var str = '{"title":"Some people feel the rain. Others just get wet."}';
// var str = '{"title":"All our dreams can come true, if we have the courage to pursue them."}';
// var str = '{"title":"Better to die fighting for freedom then be a prisoner all the days of your life."}';
// var str = '{"title":"When one door closes another door opens."}';
// var result = str.replace('"title','').replace('{','').replace('}','').replace('"','').replace(':','');
// console.log(result);


// var str = '{"title":"When one door closes another door opens."}';
// var result = str.replace('"title','').replace('{','').replace('}','').replace('"','').replace(':','');
// console.log(result);

// function replacer(key, value) {
//   // Filtering out properties
//   if (typeof value === 'string') {
//     return undefined;
//   }
//   return value;
// }

// var foo = {"title":"When one door closes another door opens."};
// JSON.stringify(foo, replacer);
// console.log(replacer(foo, replacer))