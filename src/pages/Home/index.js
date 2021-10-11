import React, { Component } from "react";
import axios from "axios";

import NavbarQTemu from "../../components/organisms/NavbarQTemu";
import Header from "../../components/organisms/Header";
import NextMeetup from "../../components/organisms/NextMeetup";
import AboutMeetup from "../../components/organisms/AboutMeetup";
import Members from "../../components/organisms/Members";
import PastMeetup from "../../components/organisms/PastMeetup";
import Footer from "../../components/organisms/Footer";

import "./style.css";
import img from "../../assets/imgprofile.jpg";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      meetup: {
        image: `${img}`,
        title: "Hacktiv8 Meetup",
        location: "Jakarta, Indonesia",
        totalMembers: 1078,
        organizer: "Adhy Wiranata",
      },
      invitation: {
        title: "Awesome Meetup",
        date: new Date().toString(),
        greetings: "Hello JavaScript & NodeJS Ninjas!",
        text: "Get ready for our monthly meetup JakartaJS! ..... See you there! ",
        organizer: "Best Hengki, Sofian - The JakartaJS Organizers",
      },
      profile: {
        twitter: "@JakartaJS",
        hashtag: "#jakartajs",
      },
      member: [
        {
          imageProfile:
            "https://3ek9gx368g2n28ygtw3vknmg-wpengine.netdna-ssl.com/wp-content/uploads/sites/4/2015/10/placeholder-circle-1.png",
          name: "Adhy Wiranata",
          memberType: "Organizer",
        },
        {
          imageProfile:
            "https://3ek9gx368g2n28ygtw3vknmg-wpengine.netdna-ssl.com/wp-content/uploads/sites/4/2015/10/placeholder-circle-1.png",
          name: "Bobby Wiranata",
          memberType: "Member",
        },
        {
          imageProfile:
            "https://3ek9gx368g2n28ygtw3vknmg-wpengine.netdna-ssl.com/wp-content/uploads/sites/4/2015/10/placeholder-circle-1.png",
          name: "Chandra Wiranata",
          memberType: "Member",
        },
      ],
      schedule: [
        {
          id: 39,
          date: "27 November 2017",
          topic: "JakartaJS with Kumparan",
          participants: 139,
        },
        {
          id: 40,
          date: "27 September 2017",
          topic: "JakartaJS with Blibli",
          participants: 239,
        },
        {
          id: 41,
          date: "27 October 2017",
          topic: "JakartaJS with Hacktiv8",
          participants: 39,
        },
        {
          id: 39,
          date: "27 November 2017",
          topic: "JakartaJS with Kumparan",
          participants: 139,
        },
        {
          id: 40,
          date: "27 September 2017",
          topic: "JakartaJS with Blibli",
          participants: 239,
        },
        {
          id: 41,
          date: "27 October 2017",
          topic: "JakartaJS with Hacktiv8",
          participants: 39,
        },
      ],
      members: [],
    };
  }

  componentDidMount() {
    axios.get("https://randomuser.me/api/?results=5").then((response) => {
      this.setState({
        members: response.data.results,
      });
    });
  }

  render() {
    return (
      <div>
        <Header
          image={this.state.meetup.image}
          title={this.state.meetup.title}
          location={this.state.meetup.location}
          totalMembers={this.state.meetup.totalMembers}
          organizer={this.state.meetup.organizer}
        />
        <NextMeetup
          title={this.state.invitation.title}
          date={this.state.invitation.date}
          greetings={this.state.invitation.greetings}
          text={this.state.invitation.text}
          organizer={this.state.invitation.organizer}
        />
        <AboutMeetup
          twitter={this.state.profile.twitter}
          hashtag={this.state.profile.hashtag}
        />
        <Members
          members={this.state.members}
          length={this.state.member.length}
        />
        <PastMeetup schedule={this.state.schedule} />
        <Footer />
      </div>
    );
  }
}
