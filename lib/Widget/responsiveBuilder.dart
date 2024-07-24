import 'package:flutter/material.dart';

class ResponsiveBuilder extends StatelessWidget {
  const ResponsiveBuilder({
    this.mobileBuilder,
    this.tabletBuilder,
    this.desktopBuilder,
    Key? key,
  }) : super(key: key);

  final Widget Function(
    BuildContext context,
    BoxConstraints constraints,
  )? mobileBuilder;

  final Widget Function(
    BuildContext context,
    BoxConstraints constraints,
  )? tabletBuilder;

  final Widget Function(
    BuildContext context,
    BoxConstraints constraints,
  )? desktopBuilder;

  static bool isMobile(BuildContext context) =>
      MediaQuery.of(context).size.width < 650;

  static bool isTablet(BuildContext context) =>
      MediaQuery.of(context).size.width < 1000 &&
      MediaQuery.of(context).size.width >= 650;

  static bool isDesktop(BuildContext context) =>
      MediaQuery.of(context).size.width >= 1000;

  @override
  Widget build(BuildContext context) {
    if (desktopBuilder == null &&
        tabletBuilder == null &&
        mobileBuilder == null) {
      return Text(
          "desktopBuilder,tabletBuilder and mobileBuilder can't be null.");
    }
    return LayoutBuilder(
      builder: (context, constraints) {
        if (constraints.maxWidth >= 1000) {
          if (desktopBuilder != null)
            return desktopBuilder!(context, constraints);
          else if (tabletBuilder != null)
            return tabletBuilder!(context, constraints);
          else if (mobileBuilder != null)
            return mobileBuilder!(context, constraints);
          else {
            return Text(
                "desktopBuilder,tabletBuilder and mobileBuilder can't be null.");
          }
        } else if (constraints.maxWidth >= 650) {
          if (tabletBuilder != null)
            return tabletBuilder!(context, constraints);
          else if (mobileBuilder != null)
            return mobileBuilder!(context, constraints);
          else if (desktopBuilder != null)
            return desktopBuilder!(context, constraints);
          else {
            return Text(
                "desktopBuilder,tabletBuilder and mobileBuilder can't be null.");
          }
          // return desktopBuilder(context, constraints);
        } else {
          if (mobileBuilder != null)
            return mobileBuilder!(context, constraints);
          else if (tabletBuilder != null)
            return tabletBuilder!(context, constraints);
          else if (desktopBuilder != null)
            return desktopBuilder!(context, constraints);
          else {
            return Text(
                "desktopBuilder,tabletBuilder and mobileBuilder can't be null.");
          }
          // return desktopBuilder(context, constraints);
        }
      },
    );
  }
}
