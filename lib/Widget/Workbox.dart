import 'package:flutter/material.dart';
import 'package:potrtfolio/Widget/work_custom_data.dart';

class WorkBox extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.spaceAround,
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        WorkCustomData(
          title: "Mirnah  Technology Systems, Dubai",
          subTitle:
              "I am currently pursuing Bachelor's Degree in Computer Science and Engineering \nat Savitribai Phule Pune University",
          duration: "November 2022 to Ongoing",
        ),
        WorkCustomData(
          title: "Accubits  Technologies",
          subTitle:
              "The Complete 2020 Flutter + Dart Winter Development Bootcamp at LCO Training Center,\nJaipur, Rajasthan (302017), Covering all the fundamental concepts for Flutter development",
          duration: "January 2021 to November 2022",
        ),
        WorkCustomData(
          title:
              "Enfin Technologies",
          subTitle:
              "Flutter Developer and experienced programmer with an extensive history of designing and coding \nsolutions. Skilled in Google’s Flutter/Dart, Firebase App and Web development on a global scale. If you \nare looking for someone that you can trust that will complete your app on time and on budget, then \nplease contact me. I have been developing software for 1+ years and take pride in everything I do.",
          duration: "October  2020  to January 2021",
        ),
        WorkCustomData(
          title: "Max Stack Labs Technologies",
          subTitle:
              "Working as a mentor in HakinCode organization for Flutter CodeAsylums application \n where I can utilize my skills and be an asset to the organization",
          duration: "December 2017 to October  2020",
        ),
        WorkCustomData(
          title: "Flutter Intern at Mind Sports League | Gurgaon In",
          subTitle:
              "Building world class Poker Learning platform. Poker Sports League is India’s first poker league is to sportify the game of poker through a unique, team based format",
          duration: "Nov - 2020 Present",
        ),
      ],
    );
  }
}
