// ignore_for_file: use_key_in_widget_constructors

import 'package:flutter/material.dart';

class CustomTextField extends StatelessWidget {
  final TextEditingController controller;
  final String hintText;
  const CustomTextField(
    {Key? key, 
    required this.controller,
    required this.hintText
  });

  @override
  Widget build(BuildContext context) {
    return TextFormField(
      controller: controller,
      decoration: InputDecoration(
        hintText: hintText,
        border: const OutlineInputBorder(
          borderSide: BorderSide(
            color: Colors.black38,
          )
        ),
        enabledBorder: const OutlineInputBorder(
          borderSide: BorderSide(
            color: Colors.black38,
          ),
        ),
      ),
      validator: (val){
        if(val == null || val.isEmpty){
          return 'Enter your $hintText';
        }
        return null;
      },
    );
  }
}
