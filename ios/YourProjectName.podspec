package YourProjectName

Pod::Spec.new do |s|
  s.name             = 'UgoiraView'
  s.version          = '1.0.0'
  s.summary          = 'A module for displaying Ugoira animations in React Native.'
  s.description      = 'This module provides functionality to render Ugoira animations seamlessly within a React Native application.'
  s.homepage         = 'https://github.com/YourUsername/UgoiraView'
  s.license          = { :type => 'MIT', :file => 'LICENSE' }
  s.author           = { 'Your Name' => 'your.email@example.com' }
  s.source           = { :git => 'https://github.com/YourUsername/UgoiraView.git', :tag => s.version.to_s }
  
  s.platform         = :ios, '10.0'
  s.source_files     = 'ios/**/*.{h,m}'
  s.dependency       'React', '~> 0.64.0'
  s.dependency       'React-Core', '~> 0.64.0'
  s.dependency       'React-RCTImage', '~> 0.64.0'
  s.dependency       'React-RCTText', '~> 0.64.0'
  s.dependency       'React-RCTView', '~> 0.64.0'
end