<?php

declare(strict_types=1);

use Rector\Core\Configuration\Option;
use Symfony\Component\DependencyInjection\Loader\Configurator\ContainerConfigurator;
use Rector\Set\ValueObject\SetList;

return static function (ContainerConfigurator $containerConfigurator): void {
  // get parameters
  $parameters = $containerConfigurator->parameters();

  // paths to refactor; solid alternative to CLI arguments
  $parameters->set(Option::PATHS, [
    __DIR__ . '/src',
  ]);

  // here we can define, what sets of rules will be applied
  $parameters->set(Option::SETS, [
    SetList::DOWNGRADE_PHP80,
  ]);

  // is your PHP version different from the one your refactor to? [default: your PHP version]
  // $parameters->set(Option::PHP_VERSION_FEATURES, '7.1');
};

// use Rector\Config\RectorConfig;
// use Rector\TypeDeclaration\Rector\Property\TypedPropertyFromStrictConstructorRector;
//
// return RectorConfig::configure()
//     // register single rule
//     ->withRules([
//         TypedPropertyFromStrictConstructorRector::class
//     ])
//     ->withPhpSets(php73: true);
//     // here we can define, what prepared sets of rules will be applied
//     ->withPreparedSets(
//         deadCode: false,
//         codeQuality: false,
//     );
