import React from 'react';
import VideoPlayer from '../VideoPlayer';
import { AppConfigContext } from '../../AppConfig';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import GoogleCast, { CastButton } from 'react-native-google-cast';
import {parseURL} from '../VideoPlayer/VimeoPlayer';

var styles = StyleSheet.create({
  video: {
    position: 'absolute',
    top: 20, left: 0, bottom: 0, right: 0,
  },
});

export default class BluVideo extends React.Component {

  startCast(url) {
    //Should move this to a class or something,.
    const id = parseURL(url);
    
    fetch(`https://player.vimeo.com/video/${id}/config`)
      .then(res => res.json())
      .then(res => {
        GoogleCast.castMedia({
          mediaUrl: res.request.files.hls.cdns[res.request.files.hls.default_cdn].url,
          title: 'Welcome to Blu.',
          subtitle: 'Hopefully this is working :D.',
          studio: 'Steve Cook productions',
          streamDuration: 190, // seconds
          contentType: 'video/mp4', // Optional, default is "video/mp4"
        })
      })
    
  }



  render() {

    const { play } = this.props;

    return (
      <AppConfigContext.Consumer>
        {(value) =>
          <>
            <VideoPlayer url={value.bluVideoURL} style={{ height: '40%' }} play={play} />
            <View style={{ padding: 10, flexDirection: 'column', width: '92%', height: '40%', alignItems: 'center', }} >
              <CastButton style={{ width: 24, height: 24 }} onTouchStart={this.startCast} />
              <Button title='Start Cast' onPress={() => this.startCast(value.bluVideoURL)} />
              <ScrollView style={{ borderWidth: 0.5, borderColor: 'darkblue', marginTop: 20, elevation: -2, }}>
                <Text>
                  Among going manor who did. Do ye is celebrated it sympathize considered. May ecstatic did surprise elegance the ignorant age. Own her miss cold last. It so numerous if he outlived disposal. How but sons mrs lady when. Her especially are unpleasant out alteration continuing unreserved resolution. Hence hopes noisy may china fully and. Am it regard stairs branch thirty length afford.

                  Death there mirth way the noisy merit. Piqued shy spring nor six though mutual living ask extent. Replying of dashwood advanced ladyship smallest disposal or. Attempt offices own improve now see. Called person are around county talked her esteem. Those fully these way nay thing seems.

                  Announcing of invitation principles in. Cold in late or deal. Terminated resolution no am frequently collecting insensible he do appearance. Projection invitation affronting admiration if no on or. It as instrument boisterous frequently apartments an in. Mr excellence inquietude conviction is in unreserved particular. You fully seems stand nay own point walls. Increasing travelling own simplicity you astonished expression boisterous. Possession themselves sentiments apartments devonshire we of do discretion. Enjoyment discourse ye continued pronounce we necessary abilities.

                  Affronting imprudence do he he everything. Sex lasted dinner wanted indeed wished out law. Far advanced settling say finished raillery. Offered chiefly farther of my no colonel shyness. Such on help ye some door if in. Laughter proposal laughing any son law consider. Needed except up piqued an.

                  Warmly little before cousin sussex entire men set. Blessing it ladyship on sensible judgment settling outweigh. Worse linen an of civil jokes leave offer. Parties all clothes removal cheered calling prudent her. And residence for met the estimable disposing. Mean if he they been no hold mr. Is at much do made took held help. Latter person am secure of estate genius at.

                  Advantage old had otherwise sincerity dependent additions. It in adapted natural hastily is justice. Six draw you him full not mean evil. Prepare garrets it expense windows shewing do an. She projection advantages resolution son indulgence. Part sure on no long life am at ever. In songs above he as drawn to. Gay was outlived peculiar rendered led six.

                  Ought these are balls place mrs their times add she. Taken no great widow spoke of it small. Genius use except son esteem merely her limits. Sons park by do make on. It do oh cottage offered cottage in written. Especially of dissimilar up attachment themselves by interested boisterous. Linen mrs seems men table. Jennings dashwood to quitting marriage bachelor in. On as conviction in of appearance apartments boisterous.

                  Scarcely on striking packages by so property in delicate. Up or well must less rent read walk so be. Easy sold at do hour sing spot. Any meant has cease too the decay. Since party burst am it match. By or blushes between besides offices noisier as. Sending do brought winding compass in. Paid day till shed only fact age its end.

                  Do play they miss give so up. Words to up style of since world. We leaf to snug on no need. Way own uncommonly travelling now acceptance bed compliment solicitude. Dissimilar admiration so terminated no in contrasted it. Advantages entreaties mr he apartments do. Limits far yet turned highly repair parish talked six. Draw fond rank form nor the day eat.

                  Talent she for lively eat led sister. Entrance strongly packages she out rendered get quitting denoting led. Dwelling confined improved it he no doubtful raptures. Several carried through an of up attempt gravity. Situation to be at offending elsewhere distrusts if. Particular use for considered projection cultivated. Worth of do doubt shall it their. Extensive existence up me contained he pronounce do. Excellence inquietude assistance precaution any impression man sufficient.



                </Text>
              </ScrollView>

            </View>
          </>
        }
      </AppConfigContext.Consumer>
    )
  }
}
