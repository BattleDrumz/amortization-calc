// Copyright 2024, University of Colorado Boulder

/**
 * ESLint configuration for amortization-calc.
 *
 * @author Luke Thompson
 */

import simEslintConfig from '../perennial-alias/js/eslint/config/sim.eslint.config.mjs';
import banTSCommentConfig from '../perennial-alias/js/eslint/config/util/banTSCommentConfig.mjs';

export default [
  ...simEslintConfig,
  ...banTSCommentConfig
];