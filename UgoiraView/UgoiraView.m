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

@implementation UgoiraView {
    NSTimer *_animationTimer;
    NSUInteger _currentImageIndex;
    BOOL _isAnimating;
}

- (instancetype)initWithFrame:(CGRect)frame images:(NSArray<UIImage *> *)images width:(CGFloat)width height:(CGFloat)height resizeMode:(UIViewContentMode)resizeMode {
    self = [super initWithFrame:frame];
    if (self) {
        if (images == nil || images.count == 0) {
            return nil;
        }
        _images = images;
        _width = width;
        _height = height;
        _resizeMode = resizeMode;
        _currentImageIndex = 0;
        self.contentMode = resizeMode;
        _isAnimating = NO;
    }
    return self;
}

- (void)setImages:(NSArray<UIImage *> *)images {
    if (images == nil || images.count == 0) {
        NSLog(@"Error: Images cannot be nil or empty.");
        return;
    }
    _images = images;
    _currentImageIndex = 0;
    [self setNeedsDisplay];
}

- (void)startAnimation {
    if (_images.count > 0 && !_isAnimating) {
        _isAnimating = YES;
        _animationTimer = [NSTimer scheduledTimerWithTimeInterval:0.1 target:self selector:@selector(updateImage) userInfo:nil repeats:YES];
    }
}

- (void)pauseAnimation {
    if (_isAnimating) {
        [_animationTimer invalidate];
        _animationTimer = nil;
        _isAnimating = NO;
    }
}

- (void)resumeAnimation {
    if (!_isAnimating) {
        [self startAnimation];
    }
}

- (void)updateImage {
    if (_images.count > 0) {
        _currentImageIndex = (_currentImageIndex + 1) % _images.count;
        [self setNeedsDisplay];
    }
}

- (void)drawRect:(CGRect)rect {
    if (_images.count > 0 && self.window) {
        UIImage *currentImage = _images[_currentImageIndex];
        [currentImage drawInRect:CGRectMake(0, 0, _width, _height)];
    }
}

@end