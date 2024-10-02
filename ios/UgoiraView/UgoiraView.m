package UgoiraView;

#import <UIKit/UIKit.h>

@interface UgoiraView : UIView

@property (nonatomic, assign) BOOL isPaused;

- (void)setPaused:(BOOL)paused;
- (void)pauseAnimation;
- (void)resumeAnimation;

@end

@implementation UgoiraView

- (void)setPaused:(BOOL)paused {
    if (self.isPaused != paused) {
        self.isPaused = paused;
        if (paused) {
            [self pauseAnimation];
        } else {
            [self resumeAnimation];
        }
    }
}

- (void)pauseAnimation {
    if (!self.isPaused) {
        @try {
            [self.layer removeAllAnimations];
            self.isPaused = YES;
        } @catch (NSException *exception) {
            NSLog(@"Error pausing animation: %@", exception.reason);
        }
    }
}

- (void)resumeAnimation {
    if (self.isPaused) {
        @try {
            CAAnimation *animation = [self createAnimation];
            [self.layer addAnimation:animation forKey:@"animationKey"];
            self.isPaused = NO;
        } @catch (NSException *exception) {
            NSLog(@"Error resuming animation: %@", exception.reason);
        }
    }
}

- (CAAnimation *)createAnimation {
    CABasicAnimation *animation = [CABasicAnimation animationWithKeyPath:@"position"];
    animation.fromValue = [NSValue valueWithCGPoint:CGPointMake(0, 0)];
    animation.toValue = [NSValue valueWithCGPoint:CGPointMake(100, 100)];
    animation.duration = 1.0;
    animation.repeatCount = HUGE_VALF;
    return animation;
}

@end