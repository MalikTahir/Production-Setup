module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
      'type-enum': [
        2,
        'always',
        [
          'feat',    // New feature
          'fix',     // Bug fix
          'docs',    // Documentation changes
          'style',   // Code style changes (e.g., white-space, formatting)
          'refactor', // Code restructuring without behavior change
          'test',    // Adding or updating tests
          'chore',   // Miscellaneous tasks like build process changes
        ]
      ],
      'subject-case': [2, 'never', ['start-case', 'pascal-case']],  // Ensure subject is in lower case
      'subject-max-length': [2, 'always', 72],  // Limit subject length to 72 characters
    },
  };
  