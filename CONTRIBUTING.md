# Contributing to Linux E-Learning Platform

Thank you for your interest in contributing! This document provides guidelines for contributing to this project.

## 🤝 How to Contribute

### Reporting Issues
- Use the GitHub issue tracker to report bugs
- Check if the issue already exists before creating a new one
- Provide detailed information including:
  - Steps to reproduce
  - Expected vs actual behavior
  - Browser/OS information
  - Screenshots if applicable

### Suggesting Features
- Open an issue with the "enhancement" label
- Describe the feature and its benefits
- Include examples of how it would be used

### Code Contributions

#### Development Setup
1. Fork the repository
2. Clone your fork locally
3. Install dependencies: `cd client && npm install`
4. Create a feature branch: `git checkout -b feature/your-feature-name`
5. Make your changes
6. Test thoroughly
7. Commit with descriptive messages
8. Push to your fork
9. Submit a pull request

#### Coding Standards
- Follow the existing code style
- Use TypeScript for type safety
- Write clear, descriptive variable and function names
- Add comments for complex logic
- Ensure accessibility standards are met

#### Content Guidelines
When adding new lessons or courses:
- Include real-world scenarios and practical examples
- Provide copy-able code snippets
- Add practice exercises
- Ensure content is accurate and up-to-date
- Test all commands and code examples

#### Testing
- Test your changes thoroughly
- Verify the app builds without errors: `npm run build`
- Check for console errors
- Test on different screen sizes
- Verify all interactive features work

### Pull Request Process
1. Update documentation if needed
2. Add your changes to the description
3. Reference any related issues
4. Wait for review and address feedback
5. Squash commits if requested

## 📝 Content Areas Needing Contributions

### High Priority
- Additional real-world troubleshooting scenarios
- More advanced Kubernetes examples
- Cloud security best practices
- Performance monitoring and optimization

### Medium Priority
- Additional Linux distributions coverage
- More automation scripts and examples
- Container orchestration patterns
- Advanced networking scenarios

### Low Priority
- UI/UX improvements
- Additional themes or styling options
- Gamification features
- Progress tracking enhancements

## 🎯 Content Structure

When adding new content, follow this structure:

```typescript
{
  id: number,
  title: "Lesson Title",
  content: `
    # Main Topic
    Brief introduction to the topic.
    
    ## Real-World Scenario: Descriptive Title
    Describe a practical situation where this knowledge applies.
    
    ### Solution Steps:
    \`\`\`bash
    # Commands with comments
    command --option value
    \`\`\`
    
    ## Best Practices:
    - List key recommendations
    - Include security considerations
    - Mention performance implications
  `,
  commands: [
    "command1 --help",
    "command2 --option",
  ],
  practice: "Hands-on exercise description"
}
```

## 🏆 Recognition

Contributors will be recognized in:
- README.md contributors section
- GitHub contributors page
- Release notes for significant contributions

## 📞 Getting Help

If you need help while contributing:
- Check existing issues and documentation
- Ask questions in issue comments
- Contact maintainers for guidance

## 🔒 Security

If you discover security vulnerabilities:
- Do NOT open a public issue
- Email the maintainers directly
- Provide detailed information
- Allow time for assessment and fix

Thank you for contributing to make Linux education more accessible and practical! 🚀
