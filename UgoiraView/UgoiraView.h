package UgoiraView;

#import <UIKit/UIKit.h>

@interface UgoiraView : UIView

@property (nonatomic, strong) NSArray<UIImage *> *images;
@property (nonatomic) CGFloat width;
@property (nonatomic) CGFloat height;
@property (nonatomic) UIViewContentMode resizeMode;
@property (nonatomic, readonly) BOOL isAnimating;

- (instancetype)initWithFrame:(CGRect)frame images:(NSArray<UIImage *> *)images width:(CGFloat)width height:(CGFloat)height resizeMode:(UIViewContentMode)resizeMode;
- (void)setImages:(NSArray<UIImage *> *)images;
- (void)startAnimation;
- (void)pauseAnimation;
- (void)resumeAnimation;

@end

#import "UgoiraView.h"

@interface UgoiraView ()

@property (nonatomic, strong) NSTimer *animationTimer;
@property (nonatomic) NSUInteger currentFrameIndex;

@end

@implementation UgoiraView

- (instancetype)initWithFrame:(CGRect)frame images:(NSArray<UIImage *> *)images width:(CGFloat)width height:(CGFloat)height resizeMode:(UIViewContentMode)resizeMode {
    self = [super initWithFrame:frame];
    if (self) {
        if (images.count == 0) {
            return nil;
        }
        _images = images;
        _width = width;
        _height = height;
        _resizeMode = resizeMode;
        _currentFrameIndex = 0;
        _isAnimating = NO;
        self.contentMode = resizeMode;
    }
    return self;
}

- (void)setImages:(NSArray<UIImage *> *)images {
    if (images.count == 0) {
        [self pauseAnimation];
    }
    _images = images;
    _currentFrameIndex = 0;
    [self setNeedsDisplay];
}

- (void)startAnimation {
    if (!self.isAnimating && self.images.count > 0) {
        self.animationTimer = [NSTimer scheduledTimerWithTimeInterval:0.1 target:self selector:@selector(updateFrame) userInfo:nil repeats:YES];
        _isAnimating = YES;
    }
}

- (void)pauseAnimation {
    if (self.isAnimating) {
        [self.animationTimer invalidate];
        self.animationTimer = nil;
        _isAnimating = NO;
    }
}

- (void)resumeAnimation {
    if (!self.isAnimating && self.images.count > 0) {
        [self startAnimation];
    }
}

- (void)updateFrame {
    if (self.images.count > 0) {
        _currentFrameIndex = (_currentFrameIndex + 1) % self.images.count;
        [self setNeedsDisplay];
    }
}

- (void)drawRect:(CGRect)rect {
    if (self.images.count > 0) {
        UIImage *currentImage = self.images[self.currentFrameIndex];
        [currentImage drawInRect:CGRectMake(0, 0, self.width, self.height)];
    }
}

@end