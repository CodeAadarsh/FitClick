import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  accent: '#FF7363',
  purple: '#817DC0',

  black: '#171717',
  white: '#FFFFFF',
  background: '#252C4A',
};

export const SIZES = {
  base: 10,
  width,
  height,
};

export const exercises = [
  {
    title: 'Diet Planner',
    image: require('../Components/Images/Exercise1.png'),
    subTitle:
      'Live happier and healthier by learning the fundamentals of diet recommendation',
    duration: '5-20 MIN Course',
  },
  {
    title: 'BMI Calculator',
    image: require('../Components/Images/Exercise2.png'),
    subTitle:
      "BMI is used to categorize whether a person is underweight, normal weight, overweight, or obese ",
    duration: '10-20 MIN Course',
  },
  {
    title: 'Exercises',
    image: require('../Components/Images/Exercise3.png'),
    subTitle:
      'Live happier and healthier by learning the fundamentals of meditation and mindfulness',
    duration: '3-10 MIN Course',
  },
  {
    title: 'Yoga',
    image: require('../Components/Images/Exercise4.png'),
    subTitle: 'Live happier and healthier by learning the fundamentals of Yoga',
    duration: '5-10 MIN Course',
  },
];


export const exercisesDATA = [
  {
    
    image:
      'https://sworkit.com/wp-content/uploads/2020/06/sworkit-jumping-jack.gif',
    name: 'JUMPING JACKS',
    sets: 12,
  },
  {
    
    image:
      'https://177d01fbswx3jjl1t20gdr8j-wpengine.netdna-ssl.com/wp-content/uploads/2019/06/Incline-Push-Up.gif',
    name: 'INCLINE PUSH-UPS',
    sets: 10,
  },
  {
    
    image:
      'https://media.self.com/photos/583c641ca8746f6e65a60c7e/master/w_1600%2Cc_limit/DIAMOND_PUSHUP_MOTIFIED.gif',
    name: 'INCLINED PUSH-UPS',
    sets: 10,
  },
  {
    
    image:
      'https://cdn.prod.openfit.com/uploads/2020/03/10162714/wide-arm-push-up.gif',
    name: 'WIDE ARM PUSH-UPS',
    sets: 12,
  },
  {
    
    image:
      'https://www.yogajournal.com/wp-content/uploads/2021/12/Cobra.gif?width=730',
    name: 'COBRA STRETCH',
    sets: 10,
  },
  {
    
    image:
      'https://www.vissco.com/wp-content/uploads/animation/sub/double-knee-to-chest-stretch.gif',
    name: 'CHEST STRETCH',
    sets: 10,
  },

  {
    
    image:
      'https://media1.popsugar-assets.com/files/thumbor/f2sbzQY1h1zqiGEV9Mhr1IAcFMU/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2017/03/13/796/n/1922729/19cf2a4428446429_EXAMPLE.crossjacks.gif',
    name: 'JUMPING JACKS',
    sets: 12,
  },
  {
   
    image:
      'https://i.pinimg.com/originals/18/27/be/1827be178c019b1dc6f8a8d8b4a7b0b8.gif',
    name: 'MOUNTAIN CLIMBERS',
    sets: 10,
  },
  {
    id: '92',
    image:
      'https://i.pinimg.com/originals/f4/b0/f3/f4b0f3093fcadd64968e4c46d1767b50.gif',
    name: 'HEEL TOUCH',
    sets: 20,
  },
  {
    
    image:
      'https://i.pinimg.com/originals/cf/b5/67/cfb5677a755fe7288b608a4fec6f09a0.gif',
    name: 'PLANK',
    sets: 10,
  },
  {
    
    image:
      'https://www.gymguider.com/wp-content/uploads/2017/10/straight-leg-raise.gif',
    name: 'LEG RAISES',
    sets: 14,
  },

  {
    
    image:
      'https://post.healthline.com/wp-content/uploads/2020/06/400x400_How_to_do_Zac_Efrons_Baywatch_Workout_Dumbbell_Lateral_Raise.gif',
    name: 'ARM RAISES',
    sets: 8,
  },
  {
    
    image: 'https://thumbs.gfycat.com/CompleteZigzagFossa-max-1mb.gif',
    name: 'TRICEP DIPS',
    sets: 10,
  },
  {
    
    image: 'https://thumbs.gfycat.com/MisguidedAridAlaskanmalamute-max-1mb.gif',
    name: 'DIAMOND_PUSHUP',
    sets: 10,
  },
  {
    id: '73',
    image: 'https://c.tenor.com/gI-8qCUEko8AAAAC/pushup.gif',
    name: 'PUSH-UPS',
    sets: 10,
  },
  {
    id: '74',
    image:
      'https://i.pinimg.com/originals/8c/53/27/8c532774e4e1c524576bf1fb829ad895.gif',
    name: 'DUMBELL CURL',
    sets: 11,
  },
  {
    
    image:
      'https://www.vissco.com/wp-content/uploads/animation/sub/inch-worm.gif',
    name: 'INCH WORMS',
    sets: 5,
  },
  {
    
    image: 'https://c.tenor.com/jqwaOmRs-7gAAAAC/tricep-kick-back-tricep.gif',
    name: 'TRICEP LIFT',
    sets: 8,
  },
  {
    
    image:
      'https://i.pinimg.com/originals/ff/cf/40/ffcf40474f0758dfedebc823f5532aa1.gif',
    name: 'DECLINE PUSH-UPS',
    sets: 9,
  },
  {
    
    image:
      'https://image.2bstronger.com/article/fitness/the-14-toughest-do-anywhere-workout-moves-56348/1006.gif',
    name: 'HINDU PUSH-UPS',
    sets: 10,
  },
  {
    
    image: 'https://thumbs.gfycat.com/TheseRigidBorer-size_restricted.gif',
    name: 'SHOULDER STRETCH',
    sets: 5,
  },
  {
    
    image: 'https://thumbs.gfycat.com/AlertAfraidAldabratortoise-max-1mb.gif',
    name: 'COBRA STRETCH',
    sets: 4,
  },
  {
    
    image:
      'https://media4.popsugar-assets.com/files/thumbor/BaWEAcCjtJEjiwf3PqJHnZ_S23A/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2016/08/10/766/n/1922729/1eae2dcf3d395379_PushUpTwist.gif',
    name: 'PUSH-UP & ROTATION',
    sets: 12,
  },
  {
    
    image:
      'https://media3.popsugar-assets.com/files/thumbor/0Xiqpo7pxrKz5CKcRl7XYrKegko/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2014/02/27/847/n/1922729/1baf9ec0f5ce4ea9_burpee.3.gif',
    name: 'BURPEES',
    sets: 10,
  },
];
