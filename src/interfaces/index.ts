import { UseInViewOptions } from 'motion/react';
import { AnimationController, AnimationKeys, TransitionKeys } from '../types';

export interface OverviewCardProps {
  title: string;
  desc: string;
  link: string;
  icon: React.ReactNode;
}

export interface AnimationQueueAnimationProps {
  mode: AnimationKeys | AnimationKeys[];
  reverse?: boolean;
  className?: string;
  isControlled?: AnimationController;
  delay?: number;
  isAnimationStopped?: boolean;
  transition?: TransitionKeys;
  duration?: number;
  configView?: UseInViewOptions;
}
