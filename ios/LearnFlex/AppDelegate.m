#import "AppDelegate.h"

#import <React/RCTBridge.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>

#ifdef FB_SONARKIT_ENABLED
#import <FlipperKit/FlipperClient.h>
#import <FlipperKitLayoutPlugin/FlipperKitLayoutPlugin.h>
#import <FlipperKitUserDefaultsPlugin/FKUserDefaultsPlugin.h>
#import <FlipperKitNetworkPlugin/FlipperKitNetworkPlugin.h>
#import <SKIOSNetworkPlugin/SKIOSNetworkAdapter.h>
#import <FlipperKitReactPlugin/FlipperKitReactPlugin.h>

static void InitializeFlipper(UIApplication *application) {
  FlipperClient *client = [FlipperClient sharedClient];
  SKDescriptorMapper *layoutDescriptorMapper = [[SKDescriptorMapper alloc] initWithDefaults];
  [client addPlugin:[[FlipperKitLayoutPlugin alloc] initWithRootNode:application withDescriptorMapper:layoutDescriptorMapper]];
  [client addPlugin:[[FKUserDefaultsPlugin alloc] initWithSuiteName:nil]];
  [client addPlugin:[FlipperKitReactPlugin new]];
  [client addPlugin:[[FlipperKitNetworkPlugin alloc] initWithNetworkAdapter:[SKIOSNetworkAdapter new]]];
  [client start];
}
#endif

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
#ifdef FB_SONARKIT_ENABLED
  InitializeFlipper(application);
#endif

  RCTBridge *bridge = [[RCTBridge alloc] initWithDelegate:self launchOptions:launchOptions];
  RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge
                                                   moduleName:@"LearnFlex"
                                            initialProperties:nil];

  if (@available(iOS 13.0, *)) {
      rootView.backgroundColor = [UIColor systemBackgroundColor];
  } else {
      rootView.backgroundColor = [UIColor whiteColor];
  }

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  return YES;
}

- (void)buildMenuWithBuilder:(id<UIMenuBuilder>)builder {
  [super buildMenuWithBuilder:builder];
  [builder removeMenuForIdentifier: UIMenuFile];
  [builder removeMenuForIdentifier: UIMenuEdit];
  [builder removeMenuForIdentifier: UIMenuView];
  [builder removeMenuForIdentifier: UIMenuFormat];
  NSMutableArray* actions = [[NSMutableArray alloc] init];

  [actions addObject:[UIAction actionWithTitle:@"Frequently Asked Questions"
                                         image:nil
                                    identifier:nil
                                       handler:^(__kindof UIAction* _Nonnull action) {
    [self openHelpUrl: @"https://matthewrobertsdev.github.io/celeritasapps/#/faq"];
  }]];
  
  [actions addObject:[UIAction actionWithTitle:@"Homepage"
                                         image:nil
                                    identifier:nil
                                       handler:^(__kindof UIAction* _Nonnull action) {
    [self openHelpUrl: @"https://matthewrobertsdev.github.io/celeritasapps/#/"];
  }]];
  
  [actions addObject:[UIAction actionWithTitle:@"Contact the Developer"
                                         image:nil
                                    identifier:nil
                                       handler:^(__kindof UIAction* _Nonnull action) {
    [self openHelpUrl: @"https://matthewrobertsdev.github.io/celeritasapps/#/contact"];
  }]];
  
  [actions addObject:[UIAction actionWithTitle:@"Privacy Policy"
                                         image:nil
                                    identifier:nil
                                       handler:^(__kindof UIAction* _Nonnull action) {
    [self openHelpUrl: @"https://matthewrobertsdev.github.io/celeritasapps/#/privacy"];
  }]];

  UIMenu* menu =
  [UIMenu menuWithTitle:@"Help"
               children:actions];
  [builder replaceMenuForIdentifier:UIMenuHelp withMenu: menu];
}

- (void)openHelpUrl:(NSString *) urlString {
  UIApplication *application = [UIApplication sharedApplication];
  NSURL *URL = [NSURL URLWithString:urlString];
  [application openURL:URL options:@{} completionHandler:nil];
}


- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end
