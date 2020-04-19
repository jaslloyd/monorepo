# Monorepo POC

This is a monorepo POC with the help of yarn workspaces.

## Yarn Workspaces

To get started we need a root package.json file that has the following properties.

```json
{
  "private": true,
  "workspaces": [
    "packages/*"
  ]
}
```

Each folder under the packages folder is considered a workspace, for example we can have multiple FEs or even common packages. Like in this example we have:

    .
    ├── packages                   
    ├──── common                    # React component library for all FEs we have
    ├──── fe1                       # Sample React app #1
    ├──── fe2                       # Sample React app #2
    └── ...


## Resources

[Ben Awad yarn-workspaces-example](https://github.com/benawad/yarn-workspaces-example) - [Video Tutorial](https://www.youtube.com/watch?v=G8KXFWftCg0)
[Lerna-yarn-workspaces-example](https://github.com/Quramy/lerna-yarn-workspaces-example)